import React, { useEffect } from "react";
import {
  makeStyles,
  Box,
  Container,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Card,
  Button,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { useQuery, gql } from "@apollo/client";

const useStyles = makeStyles(() => ({
  box: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "30px",
  },
  avatar: {
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
  namechip: {
    color: "crimson",
    fontFamily: "Inter",
    fontSize: "30px",
    fontWeight: "800",
    padding: "30px",
    marginTop: "40px",
  },
  Title: {
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
  },
  cardTitle: {
    fontSize: "14px",
    fontFamily:"Inter"
  },
  card: {
    fontFamily: "Inter",
  },
  backbtn:{
    paddingInlineStart:"30px",
    paddingInlineEnd:"30px",
    marginTop:"30px"
  }
}));

export const SingleCharacter = ({ charID,onBckclick}) => {
  let GET_SINGLE_CHARACTER = gql`
    query character($id: ID!) {
      character(id: $id) {
        name
        image
        status
        species
        episode {
          name
          air_date
        }
        gender
        origin {
          name
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_SINGLE_CHARACTER, {
    variables: { id: charID },
  });
  const classes = useStyles({});

  const renderCharacterComponent = () => {
    return (
      <>
        <Container>
        <Button className={classes.backbtn} variant="outlined" disableElevation onClick={onBckclick}>
            Back
          </Button>
          <Box className={classes.box}>
            
            <Avatar
              className={classes.avatar}
              alt="This is a pic"
              src={data?.character.image}
              sx={{ width: 300, height: 300 }}
            />
            <Chip
              label={data?.character.name}
              className={classes.namechip}
              size="medium"
              variant="outlined"
            />
          </Box>
        </Container>
        <Grid container spacing={2} style={{ padding: "30px" }}>
          <Grid item xs={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Gender</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data?.character.gender}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Status</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data?.character.status}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Species</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data?.character.species}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={3}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Origin</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{data?.character.origin.name}</Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
        <Box className={classes.Title}>
          <Typography
            style={{
              color: "Black",
              fontFamily: "Inter",
              fontSize: "30px",
              fontWeight: 800,
              padding: "30px",
            }}
          >
            Lists Of Episodes
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {data?.character.episode.map(function (d, idx) {
            return (
              <Grid item xs={3} style={{ padding: "20px" }}>
                <Card key={d.id} className={classes.card} sx={{ width: 345 }}>
                  <CardContent>
                    <Typography variant="h5">Name :</Typography>
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

  return renderCharacterComponent();
};
