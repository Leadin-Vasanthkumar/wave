/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, KeyboardEvent, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Check } from 'lucide-react';
import TextareaAutosize from 'react-textarea-autosize';

type Block = {
  id: number;
  type: 'text' | 'todo';
  text: string;
  completed?: boolean;
};

export default function App() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [input, setInput] = useState('');

  const blockRefs = useRef<{ [key: number]: HTMLTextAreaElement | null }>({});
  const mainInputRef = useRef<HTMLTextAreaElement | null>(null);

  const focusBlockEnd = (id: number) => {
    const el = blockRefs.current[id];
    if (el) {
      el.focus();
      const len = el.value.length;
      setTimeout(() => el.setSelectionRange(len, len), 0);
    }
  };

  const handleMainInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Backspace' && input === '') {
      if (blocks.length > 0) {
        e.preventDefault();
        focusBlockEnd(blocks[blocks.length - 1].id);
      }
      return;
    }

    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      const val = input.trim();
      if (val) {
        if (val.startsWith('/')) {
          setBlocks([...blocks, { id: Date.now(), type: 'todo', text: val.slice(1).trim(), completed: false }]);
        } else {
          setBlocks([...blocks, { id: Date.now(), type: 'text', text: val }]);
        }
        setInput('');
      } else {
        setInput('');
      }
    }
  };

  const updateBlockText = (id: number, newText: string) => {
    setBlocks(blocks.map(block => block.id === id ? { ...block, text: newText } : block));
  };

  const handleBlockKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>, index: number, block: Block) => {
    if (e.key === 'Backspace' && block.text === '') {
      if (block.type === 'todo') {
        return; // Prevent backspace from deleting a task block
      }
      
      e.preventDefault();
      
      if (index > 0) {
        focusBlockEnd(blocks[index - 1].id);
      } else {
        mainInputRef.current?.focus();
      }

      deleteBlock(block.id);
    }
  };

  const toggleTodo = (id: number) => {
    setBlocks(blocks.map(block => block.id === id ? { ...block, completed: !block.completed } : block));
  };

  const deleteBlock = (id: number) => {
    setBlocks(prev => prev.filter(block => block.id !== id));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-20 pb-12 px-6 font-sans">
      <div id="todo-container" className="w-full max-w-[600px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-[60px]"
        >
          <h1 
            id="main-heading"
            className="text-[45px] font-bold text-[#ff0000] tracking-[-1px] select-none"
            style={{ fontFamily: 'var(--font-comic)' }}
          >
            To-Do List
          </h1>
        </motion.div>

        <div className="todo-list space-y-0">
          <AnimatePresence mode="popLayout" initial={false}>
            {blocks.map((block, index) => (
              block.type === 'todo' ? (
                <motion.div
                  key={block.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="group flex items-start py-4 border-b border-[#f3f4f6]"
                >
                  <div 
                    onClick={() => toggleTodo(block.id)}
                    className={`mt-1 w-6 h-6 border-2 rounded-[6px] mr-5 flex flex-shrink-0 items-center justify-center transition-colors duration-200 cursor-pointer ${
                      block.completed ? 'bg-[#ff0000] border-[#ff0000]' : 'border-[#ff0000] bg-transparent'
                    }`}
                  >
                    {block.completed && <Check size={16} className="text-white" strokeWidth={3} />}
                  </div>
                  
                  <TextareaAutosize 
                    ref={(el) => { blockRefs.current[block.id] = el; }}
                    value={block.text}
                    onChange={(e) => updateBlockText(block.id, e.target.value)}
                    onKeyDown={(e) => handleBlockKeyDown(e, index, block)}
                    className={`flex-1 text-[20px] font-semibold transition-all duration-300 bg-transparent focus:outline-none resize-none leading-relaxed ${
                      block.completed ? 'text-[#9ca3af] line-through font-normal' : 'text-[#374151]'
                    }`}
                  />

                  <button
                    onClick={() => deleteBlock(block.id)}
                    className="p-2 text-[#ff0000] opacity-0 group-hover:opacity-100 transition-opacity ml-2 pointer-events-none group-hover:pointer-events-auto"
                    title="Delete Task"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key={block.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex items-center py-2"
                >
                  <TextareaAutosize 
                    ref={(el) => { blockRefs.current[block.id] = el; }}
                    value={block.text}
                    onChange={(e) => updateBlockText(block.id, e.target.value)}
                    onKeyDown={(e) => handleBlockKeyDown(e, index, block)}
                    className="w-full text-[20px] text-[#374151] bg-transparent focus:outline-none resize-none leading-relaxed"
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>

          <div className="flex items-center py-2">
            <TextareaAutosize
              ref={mainInputRef}
              id="todo-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleMainInputKeyDown}
              placeholder="Type '/' to add a task, or just plain text..."
              className="w-full text-[20px] text-[#374151] placeholder:text-gray-300 focus:outline-none bg-transparent resize-none leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


