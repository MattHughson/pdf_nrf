import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";



export default async function Fund() {
  const { data } = await fetchData();
  console.log("rendering pdf", data)
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
  return storyblokApi.get(`cdn/stories/fund`, sbParams);
}