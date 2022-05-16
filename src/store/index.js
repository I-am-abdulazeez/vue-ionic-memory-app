import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "m1",
          title: "A trip into the moutains",
          description: "It was a really nice trip",
          image:
            "https://images.pexels.com/photos/163688/hiker-travel-trip-wander-163688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: "m1",
          title: "A trip to the Rivers",
          description: "Nice water",
          image:
            "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
          id: "m1",
          title: "Travel around UAE",
          description: "Really cool!",
          image:
            "https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
