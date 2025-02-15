import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
class Home extends React.Component {
  state = {
    isloading: true,
    movies: [],
  };

  getmovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    // console.log(movies);
    // this.setState({ movies: movies }); // {from state: from axios}
    this.setState({ movies, isloading: false });
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isloading: false, book: true });
    // }, 3000);
    this.getmovies();
  }
  render() {
    const { isloading, movies } = this.state;
    return (
      <section className="container">
        {isloading ? (
          <div className="loader">
            <span className="loader__text">"loading..."</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
