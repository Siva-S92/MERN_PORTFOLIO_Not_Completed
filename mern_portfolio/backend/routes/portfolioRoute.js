import express from "express";
import {
  Intro,
  About,
  Experience,
  Project,
  Course,
  Contact,
} from "../models/portfolioModel.js";

const router = express.Router();

router.get("/get-portfoliodata", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const experiences = await Experience.find();
    const projects = await Project.find();
    const courses = await Course.find();
    const contacts = await Contact.find();
    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      experiences: experiences,
      projects: projects,
      courses: courses,
      contact: contacts[0],
    });
  } catch (error) {
    res.status(500).send(error);
  }
});
export const portfolioRouter = router;
