import React from "react";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Articles from "../components/articles";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      {/* <Hero /> */}
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h2 class="uk-heading-line uk-text-center">
            {/* <span>My Blog Stories 😉</span> */}
          </h2>
          <h2 class="uk-heading-line uk-text-center">
            <span>My Blog Stories 😉</span>
          </h2>
          <Articles articles={articles} />
        </div>
      </div>
      {/* <Footer /> */}
    </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default Home;
