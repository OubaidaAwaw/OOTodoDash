  // import express
const express = require("express")

  // import tax handler
const todoController = require("./../../controller/todoController.js")

  // declare the router
const router = express.Router()

router.post("/", todoController.CreateTodo)

router.delete("/:id", todoController.CancelTodo)

router.put("/:id", todoController.UpdateTodo)

router.post("/search",  todoController.SearchTodo)

router.post("/status", todoController.GetStatus)

module.exports = router




