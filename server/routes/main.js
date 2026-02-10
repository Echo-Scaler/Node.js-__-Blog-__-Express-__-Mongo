const express = require("express");
const router = express.Router(); //need to imoport for routes
const Post = require("../models/Post");

/**
 * GET /
 * HOME
 */
router.get("/", async (req, res) => {
  try {
    const locals = {
      title: "BlogNinja",
      description: "BlogNinja is a blog website Testing Page",
    };

    let perPage = 3;
    let page = req.query.page || 1;

    const data = await Post.aggregate([{ $sort: { createdAt: -1 } }])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();

    // Count is used for pagination
    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render("index", {
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
    });
  } catch (error) {
    console.log(error);
  }
});

/**
 * GET /
 * Post :id
 */
router.get("/post/:id", async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: "Simple Blog created with NodeJs, Express & MongoDB.",
    };

    res.render("post", {
      locals,
      data,
    });
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.get("/blogs", (req, res) => {
  Post.find().then((posts) => {
    res.render("blogs", { posts });
  });
});

// Seed Data Function (Run once or uncomment to use)
/*
function insertPostData() {
  Post.insertMany([
    {
      title: "Sample Title 1",
      body: "This is the body content for sample data 1.",
      createdAt: new Date("2024-01-01"),
      updatedAt: new Date("2024-01-01")
    },
    {
      title: "Sample Title 2",
      body: "This is the body content for sample data 2.",
      createdAt: new Date("2024-01-02"),
      updatedAt: new Date("2024-01-02")
    },
    {
      title: "Sample Title 3",
      body: "This is the body content for sample data 3.",
      createdAt: new Date("2024-01-03"),
      updatedAt: new Date("2024-01-03")
    },
    {
      title: "Sample Title 4",
      body: "This is the body content for sample data 4.",
      createdAt: new Date("2024-01-04"),
      updatedAt: new Date("2024-01-04")
    },
    {
      title: "Sample Title 5",
      body: "This is the body content for sample data 5.",
      createdAt: new Date("2024-01-05"),
      updatedAt: new Date("2024-01-05")
    },
    {
      title: "Sample Title 6",
      body: "This is the body content for sample data 6.",
      createdAt: new Date("2024-01-06"),
      updatedAt: new Date("2024-01-06")
    },
    {
      title: "Sample Title 7",
      body: "This is the body content for sample data 7.",
      createdAt: new Date("2024-01-07"),
      updatedAt: new Date("2024-01-07")
    },
    {
      title: "Sample Title 8",
      body: "This is the body content for sample data 8.",
      createdAt: new Date("2024-01-08"),
      updatedAt: new Date("2024-01-08")
    },
    {
      title: "Sample Title 9",
      body: "This is the body content for sample data 9.",
      createdAt: new Date("2024-01-09"),
      updatedAt: new Date("2024-01-09")
    },
    {
      title: "Sample Title 10",
      body: "This is the body content for sample data 10.",
      createdAt: new Date("2024-01-10"),
      updatedAt: new Date("2024-01-10")
    },
    {
      title: "Sample Title 11",
      body: "This is the body content for sample data 11.",
      createdAt: new Date("2024-01-11"),
      updatedAt: new Date("2024-01-11")
    },
    {
      title: "Sample Title 12",
      body: "This is the body content for sample data 12.",
      createdAt: new Date("2024-01-12"),
      updatedAt: new Date("2024-01-12")
    },
    {
      title: "Sample Title 13",
      body: "This is the body content for sample data 13.",
      createdAt: new Date("2024-01-13"),
      updatedAt: new Date("2024-01-13")
    },
    {
      title: "Sample Title 14",
      body: "This is the body content for sample data 14.",
      createdAt: new Date("2024-01-14"),
      updatedAt: new Date("2024-01-14")
    },
    {
      title: "Sample Title 15",
      body: "This is the body content for sample data 15.",
      createdAt: new Date("2024-01-15"),
      updatedAt: new Date("2024-01-15")
    },
    {
      title: "Sample Title 16",
      body: "This is the body content for sample data 16.",
      createdAt: new Date("2024-01-16"),
      updatedAt: new Date("2024-01-16")
    },
    {
      title: "Sample Title 17",
      body: "This is the body content for sample data 17.",
      createdAt: new Date("2024-01-17"),
      updatedAt: new Date("2024-01-17")
    },
    {
      title: "Sample Title 18",
      body: "This is the body content for sample data 18.",
      createdAt: new Date("2024-01-18"),
      updatedAt: new Date("2024-01-18")
    },
    {
      title: "Sample Title 19",
      body: "This is the body content for sample data 19.",
      createdAt: new Date("2024-01-19"),
      updatedAt: new Date("2024-01-19")
    },
    {
      title: "Sample Title 20",
      body: "This is the body content for sample data 20.",
      createdAt: new Date("2024-01-20"),
      updatedAt: new Date("2024-01-20")
    }
  ])
}

// insertPostData();
*/

module.exports = router;
