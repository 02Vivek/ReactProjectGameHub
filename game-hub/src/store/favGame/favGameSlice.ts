import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../hook/useGames";

interface FavoritesState {
  games: Game[];
}

const initialState: FavoritesState = {
  games: [], // Initialize with an empty array to store favorite games
};

const favGameSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // Add a game to the favorites
    addFavorite: (state, action: PayloadAction<Game>) => {
      // Add the game to the list of favorite games
      state.games.push(action.payload);
    },
    // Remove a game from the favorites by its ID
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.games = state.games.filter(game => game.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favGameSlice.actions;

export default favGameSlice.reducer;
