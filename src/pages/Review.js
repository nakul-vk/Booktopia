import React, { useEffect } from "react";
import { Title, Navbar, Rating, Quotes, Footer } from "../components";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <section className="w-screen min-h-screen  text-center text-title">
      <Title />
      <Navbar />
      <section
        className="cover flex flex-row rounded-lg h-72 text-left w-10/12 relative left-1/2 -translate-x-1/2 text-base mt-12 font-spline bg-title"
        style={
          {
            // backgroundImage: ,
          }
        }
      >
        <motion.div className="list-disc self-end font-bold text-xl transition-all p-12 text-white">
          <motion.p className="text-xl sm:text-3xl">
            The Brothers Karamazov
          </motion.p>
          <p className="text-base sm:text-xl">Fyodor Dostoevsky</p>
          {<Rating className="text-base sm:text-xl" rating={5} />}
        </motion.div>
      </section>
      <section className="review w-10/12 relative left-1/2 -translate-x-1/2 text-left mt-12 text-lg font-spline pb-16">
        <p>
          <span className="font-bold text-3xl">F</span>yodor Dostoevsky's "The
          Brothers Karamazov" stands as a timeless masterpiece, a literary
          journey that delves deep into the complexities of the human soul.
          Published in 1880, this Russian classic continues to captivate readers
          with its intricate plot, rich characterizations, and profound
          exploration of moral and existential dilemmas.
        </p>
        <h4 className="mt-10 font-bold text-xl">Plot Summary:</h4>
        <p>
          Set in 19th-century Russia, "The Brothers Karamazov" revolves around
          the lives of the three Karamazov brothers: Dmitri, Ivan, and Alexei.
          The narrative unfolds against the backdrop of their tumultuous
          relationships with their father, Fyodor Pavlovich Karamazov, a
          libertine and unscrupulous man. The novel intricately weaves together
          themes of patricide, faith, morality, and the eternal struggle between
          good and evil.
        </p>
        <Quotes
          quote={
            "Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love."
          }
        />
        <h4 className="mt-10 font-bold text-xl">Characterization:</h4>
        <p>
          Dostoevsky's characters are as vivid and multi-faceted as the
          intricate plot itself. Each brother represents a different facet of
          the human condition. Dmitri embodies passion and impulsivity, Ivan is
          the intellectual skeptic, and Alexei grapples with spiritual and moral
          dilemmas. The supporting cast adds depth and nuance to the story,
          creating a tapestry of personalities that reflect the complexity of
          human nature.
        </p>
        <h4 className="mt-10 font-bold text-xl">Themes:</h4>
        <p>
          At its core, "The Brothers Karamazov" is a philosophical exploration
          that raises profound questions about the existence of God, the nature
          of morality, and the consequences of human actions. Dostoevsky
          challenges readers to confront their own beliefs and moral
          convictions, pushing the boundaries of conventional thought.
        </p>
        <h4 className="mt-10 font-bold text-xl">Conclusion:</h4>
        <p>
          In conclusion, Fyodor Dostoevsky's "The Brothers Karamazov" is a
          profound and thought-provoking masterpiece that transcends time and
          cultural boundaries. Its exploration of the human condition, coupled
          with compelling characters and philosophical depth, makes it a
          must-read for anyone seeking a literary journey into the depths of the
          soul. This classic remains a testament to the enduring power of
          literature to illuminate the complexities of the human experience.
          User
        </p>
        <Quotes
          quote={
            "Love in action is a harsh and dreadful thing compared to love in dreams."
          }
        />
      </section>
      <Footer />
    </section>
  );
};

export default Review;
