import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Posts from "./features/posts/Posts";
import { fetchPosts } from "./features/posts/postsSlice";

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPosts());
  // });
  return (
    <main className="App">
      <Posts />
    </main>
  );
}

export default App;
