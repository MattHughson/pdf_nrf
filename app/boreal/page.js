import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Head from 'next/head';



export default async function School() {
  const { data } = await fetchData();
  console.log("rendering pdf", data)
  return (

    <div>
        <Head>
        {/* Google Fonts: Montserrat */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <StoryblokStory story={data.story} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = {
    version: "draft",
    cv: Math.ceil(Math.random() * 1804476135)
  };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/boreal`, sbParams,{
    cache: "no-store"
  });
}