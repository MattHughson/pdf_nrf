import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";



export default async function Pdf() {
  const { data } = await fetchData();
  console.log("rendering pdf")
  return (
    <div>
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
  return storyblokApi.get(`cdn/stories/pdf`, sbParams);
}