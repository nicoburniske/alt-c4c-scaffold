const state = {
  notes: []
};

const getters = {
  getNotes: (state: { notes: any }) => state.notes
};

const mutations = {
  saveNote(state: { notes: any[] }, note: any) {
    state.notes.push(note);
  },
  deleteNote(state: { notes: any[] }, noteIndex: number) {
    state.notes.splice(noteIndex, 1);
  },
  editNoteSaved(
    state: { notes: any[] },
    payload: { note: any; index: number }
  ) {
    state.notes.splice(payload.index, 1, payload.note);
    console.log("Note", payload.index, "has been edited");
  }
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions
};
