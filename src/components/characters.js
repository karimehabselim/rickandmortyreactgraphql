import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  makeStyles,
  CardHeader,
} from "@material-ui/core";
import Skeleton from "@mui/material/Skeleton";
import { useQuery, gql } from "@apollo/client";
const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
      }
    }
  }
`;

const useStyles = makeStyles(() => ({
  container: {
    padding: "70px",
  },

  header: {
    fontFamily: "Roboto",
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Inter",
    fontWeight: 800,
  },
  card: {
    boxShadow:
      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
    marginBottom: "20px",
    "&:hover": {
      cursor: "pointer",
    },
  },
  cardTitle: {
    textAlign: "center",
    fontFamily: "Inter",
    fontWeight: 500,
  },
}));

export const CharactersComponent = ({ setCharacterID, onCardClick }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  const classes = useStyles({});

  const renderSkeleton = () => {
    return (
      <>
        <Grid container spacing={2} className={classes.container}>
          <Grid item xs={3}>
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
            <Card sx={{ width: 345 }}>
              <CardHeader>
                {" "}
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </CardHeader>
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
              <CardContent>
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
            <Card sx={{ width: 345 }}>
              <CardHeader>
                {" "}
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </CardHeader>
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
              <CardContent>
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Skeleton
              sx={{ height: 190 }}
              animation="wave"
              variant="rectangular"
            />
            <Card sx={{ width: 345 }}>
              <CardHeader>
                {" "}
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
              </CardHeader>
              <Skeleton
                sx={{ height: 190 }}
                animation="wave"
                variant="rectangular"
              />
              <CardContent>
                <React.Fragment>
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                  <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  };

  const renderCharacters = () => {
    return (
      <>
        <Typography variant="h1" className={classes.header}>
          Characters{" "}
        </Typography>
        <Grid container spacing={2} className={classes.container}>
          {data.characters.results.map(function (d, idx) {
            return (
              <Grid
                onClick={onCardClick}
                item
                xs={3}
                style={{ padding: "20px" }}
              >
                <Card
                  key={d.id}
                  onClick={() => {
                    setCharacterID(d.id);
                  }}
                  className={classes.card}
                  sx={{ width: 345 }}
                >
                  <CardMedia
                    component="img"
                    image={d.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      className={classes.cardTitle}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {d.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  };

  return loading ? renderSkeleton() : renderCharacters();
};
