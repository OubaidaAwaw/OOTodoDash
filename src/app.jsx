  // import react hooks and components
import  { lazy, Suspense } from "react"

  // import errorboundary to handle errors
import { ErrorBoundary } from "react-error-boundary"

  // import costum func
import WarningLog from "./facilities/WarningLog.js"
  
  // import react router components and hooks
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

  // import components
import ScrollToTop from "./components/ScrollToUp/ScrollToUp.jsx"
import Error from "./pages/Error/Error.jsx"
import ShowPage from "./pages/ShowPage/ShowPage.jsx"

// import component dynamically
const TodoListLayout = lazy(() => import("./layouts/TodoListLayout/TodoListLayout.jsx"))
const TodoList = lazy(() => import("./pages/TodoList/TodoList.jsx"))
const NewTodo = lazy(() => import("./pages/NewTodo/NewTodo.jsx"))
const Saved = lazy(() => import("./pages/Saved/Saved.jsx"))
const Bin = lazy(() => import("./pages/Bin/Bin.jsx"))
const Checked = lazy(() => import("./pages/Checked/Checked.jsx"))

export default function App() {
  WarningLog()
  // Create brouser router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path="/OOTodoDash" errorElement={<Error/>} element={<>
            <ScrollToTop />
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <TodoListLayout/>
              </Suspense>
            </ErrorBoundary>
          </>
        }>

          <Route index errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <TodoList/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path=":id" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <ShowPage/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path="bin" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Bin/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path="checked" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Checked/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path="saved" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <Saved/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path="new-to-do" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <NewTodo/>
              </Suspense>
            </ErrorBoundary>
          }/>

          <Route path="edit-to-do" errorElement={<Error/>} element={
            <ErrorBoundary fallback={<Error/>}>
              <Suspense>
                <NewTodo/>
              </Suspense>
            </ErrorBoundary>
          }/>
        </Route>

          {/* Error Route */}
        <Route path="*" element={<Error/>} />
      </Route>
    )
  );
    /* Provide router to the application */
  return <RouterProvider router={router} />
}
