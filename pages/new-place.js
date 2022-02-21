import React from "react";
import Head from "next/head";
import NewPlaceForm from "../src/components/NewPlaceForm";
import { useRouter } from "next/router";

const NewPlace = () => {
  const router = useRouter();

  const addPlaceHandler = async (enteredPlace) => {
    const response = await fetch("/api/new-place", {
      method: "POST",
      body: JSON.stringify(enteredPlace),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Create new Meetup</title>
        <meta
          name="description"
          content="Share with us your experience from a recently visited place"
        />
      </Head>

      <NewPlaceForm onAddPlace={addPlaceHandler} />
    </>
  );
};

export default NewPlace;
