import { MongoClient } from "mongodb";
import React from "react";
import Head from "next/head";
import VisitedPlacesList from "../src/components/VisitedPlacesList";
import { Typography } from "@mui/material";
const Home = (props) => {
  return (
    <>
      <Head>
        <title>Visited Places</title>
        <meta
          name="description"
          content="See a huge list of visited places by others or add a recently visited place!"
        />
      </Head>
      <Typography ml={60} variant="h2" component="h1">
        Visited Places{" "}
      </Typography>
      {props.places === 0 ? (
        <Typography ml={65} my={10} variant="h4" component="h1">
          Please add a place
        </Typography>
      ) : (
        <VisitedPlacesList places={props.places} />
      )}
    </>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://sam:samir.ajdini1993@cluster0.keidj.mongodb.net/places?retryWrites=true&w=majority"
  );
  const db = client.db();

  const placesCollection = db.collection("places");
  const places = await placesCollection.find().toArray();

  console.log(places);
  client.close();

  return {
    props: {
      places: places.map((place) => ({
        title: place.title.toString(),
        description: place.description,
        image: place.image,
        date: place.date,
        id: place._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default Home;
