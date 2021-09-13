import React from "react";


export default function ListArticles({stories, story }) {
  console.log(story);
  return (
    <ul>
      {/* this li tag will turn into the "DisplayArticleCard" component */}
      {stories.length > 0 &&
        stories.map((story) => (
          <li style={{listStyle: "none"}}>
            {story.title} <a href={story.url}>{`(${story.url})`}</a>
            <div>
              <p>{`${story.points} points | ${story.author} | ${story.created_at} | ${story.num_comments} comments`}</p>
            </div>
          </li>
        ))}

    </ul>
  );
}