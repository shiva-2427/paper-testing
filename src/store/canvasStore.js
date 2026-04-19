import { create } from 'zustand';

const useCanvasStore = create((set) => ({
  rawIdea: '', // User's input idea
  agentStatus: 'idle', // 'idle' | 'thinking' | 'complete'
  hookWinner: null, // id of winning hook
  
  // Simulated metrics and dynamic content synced across modules
  metrics: {
    views: 0,
    likes: 0,
    comments: 0,
    ctr: 0
  },
  
  // Actions
  setRawIdea: (idea) => set({ rawIdea: idea }),
  
  // Simulates fetching logic
  triggerAgents: () => {
    set({ agentStatus: 'thinking' });
    
    // Simulate API delay for AI generation
    setTimeout(() => {
      set({
        agentStatus: 'complete',
        metrics: {
          views: Math.floor(Math.random() * 50000) + 10000,
          likes: Math.floor(Math.random() * 2000) + 500,
          comments: Math.floor(Math.random() * 500) + 50,
          ctr: parseFloat((Math.random() * 5 + 2).toFixed(1))
        }
      });
    }, 4500); // 4.5 seconds of "thinking" animations
  },
  
  setHookWinner: (id) => set({ hookWinner: id }),
}));

export default useCanvasStore;
