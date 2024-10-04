import { Box, Flex, Grid, GridItem, Heading, Show } from "@chakra-ui/react"
import { Platform } from "./hook/useGames";
// import { Genre } from "./hook/useGenres";
// import GameGrid from "./components/GameGrid";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Genre } from "./hook/useGenres";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
// import FavoriteGamesList from "./components/FavoriteGamesList ";
import { Link, Outlet } from "react-router-dom";

export interface GameQuery { 
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [isFav, setIsFav] = useState<string>();
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar onSearch={(searchText) => setGameQuery({...gameQuery,searchText})}/>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Link className="navbar-toggler" to=""  onClick={()=>{setIsFav("")}}>
              <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
                Home
              </Heading>
            </Link>
            <Link onClick={()=>{setIsFav("Favourite")}} className="nav-link" to="favorites">
              <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
                Favourites
              </Heading>
            </Link>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre})} />
          </GridItem>
        </Show>
        <GridItem area="main"> 
          <Heading fontSize="5xl" marginLeft={2} marginTop={9} marginBottom={4}>
            {`${isFav || ""} ${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`}
          </Heading>
          <Flex marginBottom={5} marginLeft={2}>
            <Box marginRight={5}>
              <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform}) } />
            </Box>
            <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
          </Flex>
          <Outlet context={gameQuery} />
          {/* <GameGrid gameQuery={gameQuery} />
          <FavoriteGamesList /> */}
        </GridItem>
      </Grid>
    </>
  )
}

export default App
