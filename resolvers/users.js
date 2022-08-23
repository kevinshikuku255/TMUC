import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { withFilter, ApolloError } from "apollo-server";

const Query = {
  /**
   * Gets all users
   *
   * @param {string} adm
   */
  getUsers: async (_, __, { User }) => {
    const count = await User.countDocuments();
    const users = await User.find();

    return { users, count };
  },

  /**
   * Gets user by admition
   *
   * @param {string} adm
   */
  getUser: async (_, { admition }, { User }) => {
    if (!admition) {
      throw new Error("adm is required params.");
    }
    const query = { name: name };
    const user = await User.findOne(query);

    if (!user) {
      throw new Error("User with given Details doesn't exists.");
    }

    return user;
  },
};

const Mutation = {
  /* -------------------------------------------------------------------------- */
  /**
   * Signs up user new user
   *
   * @param {string} phone
   * @param {string} name
   * @param {string} admition
   */
  signup: async (_, { phone, name, admition }, { User }) => {
    const user = await User.findOne().or([{ admition }]);
    if (user) {
      return { phone, name, admition };
    }

    //fields validation
    if (!name) {
      throw new ApolloError("Fill name and any other missing fields");
    }

    if (!phone) {
      throw new ApolloError("Fill phone and any other missing fields");
    }

    //phone validation
    const phoneRegex =
      /^(?:0)?((7|1)(?:(?:[1234679][0-9])|(?:0[0-8])|(4[0-1]))[0-9]{6})$/;
    if (!phoneRegex.test(phone)) {
      throw new ApolloError("Provide correct phone number.");
    }

    //Admition validation
    const admRegex = /[A-Z][A-Z][A-Z]\/[A-Z][A-Z]\/[0-9]{5}\/[0-9]{3}/;

    if (!admRegex.test(admition)) {
      throw new ApolloError("Provide correct admition number.");
    }

    const newUser = await new User({
      phone,
      name,
      admition,
    }).save();

    return newUser;
  },
};

export default { Query, Mutation };
