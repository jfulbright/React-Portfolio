const projectArray = [
  {
    id: 1,
    Title: "Movie Wachlist",
    Src: "https://jfulbright.github.io/Jeremy-Fulbright-Portfolio/assets/images/movieWatchlistThumb.png",
    DeployedURL: "https://skyman529.github.io/MOVIEWISHLISTproject",
    GitHubRepo: "https://github.com/skyman529/MOVIEWISHLISTproject",
    Desc: "Objective of this project was to build an app that allows users to search and save movies to a Wathlist utilizing API endpoints and localStorage.",
  },
  {
    id: 2,
    Title: "JavaScript Scheduler",
    Src: "https://jfulbright.github.io/Jeremy-Fulbright-Portfolio/assets/images/movieWatchlistThumb.png",
    DeployedURL: "https://skyman529.github.io/MOVIEWISHLISTproject",
    GitHubRepo: "https://github.com/skyman529/MOVIEWISHLISTproject",
    Desc: "The objective of this project was to create a javascript application for a simple calendar application that allows a user to save events for each hour of the day to localStorage. The timeblocks will have a visual styling depending if they're in the past, present and future.",
  },
  {
    id: 3,
    Title: "JavaScript Scheduler",
    Src: "https://jfulbright.github.io/Jeremy-Fulbright-Portfolio/assets/images/movieWatchlistThumb.png",
    DeployedURL: "https://skyman529.github.io/MOVIEWISHLISTproject",
    GitHubRepo: "https://github.com/skyman529/MOVIEWISHLISTproject",
    Desc: "The objective of this project was to create a javascript application for a simple calendar application that allows a user to save events for each hour of the day to localStorage. The timeblocks will have a visual styling depending if they're in the past, present and future.",
  },
];

<Project
  id={id}
  title={Title}
  src={Src}
  deployedURL={DeployedURL}
  gitHubRepo={GitHubRepo}
  desc={Desc}
/>;

// Destructure the result object to make the code more readable, assign them to empty strings to start
const {
  id = "",
  Title = "",
  Src = "",
  DeployedURL = "",
  GitHubRepo = "",
  Desc = "",
} = result;


return (
  <Container>
    <Row xs={1} md={2} className="g-4">
    {Array.from(projects).map((_, idx) => (
        <Col size="md-8">
          <div>
            <div className="card text-center">
              <div className="card-header">
                <h2>Title{projects[0].Title}</h2>
              </div>
              <div className="card-body">{projects.children}</div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  </Container>