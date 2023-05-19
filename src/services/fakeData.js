import { faker } from "@faker-js/faker";

const generateAgents = (count) => {
  const agents = [];

  for (let i = 1; i <= count; i++) {
    const agent = {
      id: i,
      name: faker.name.fullName(),
      image: ["https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man-white-shirt-jacket-posing-camera-with-broad-smile-isolated-gray_171337-629.jpg"],
      position: faker.name.jobTitle(),
      review: faker.lorem.sentences(2),
    };
    agents.push(agent);
  }
  return agents;
};

const generateAgent = (id) => {
  const agent = {
    id,
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    position: faker.name.jobTitle(),
    review: faker.lorem.sentences(2),
  };
  return agent;
};

export { generateAgents, generateAgent };
