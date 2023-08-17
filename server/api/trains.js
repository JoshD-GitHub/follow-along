const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Returns all trains
router.get("/", async (req, res) => {
  const trains = await prisma.train.findMany();
  res.send(trains);
});

// Returns one train w/ specified id
router.get("/:id", async (req, res) => {
  try {
    const train = await prisma.train.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!train) {
      res.send({ error: true, message: "Train Not Found" });
    } else {
      res.send(train);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong :(" });
  }
});

// Route that deletes a train
router.delete("/:id", async (req, res) => {
  try {
    const train = await prisma.train.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    if (!train) {
      res.send({ error: true, message: "Train Not Found" });
    } else {
      res.send(train);
    }
  } catch (error) {
    res.send({ error: true, message: "Something went wrong :(" });
  }
});

module.exports = router;
