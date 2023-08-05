import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/router";
import { ContextProvider } from "./providers/MealPlannerStore";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}
export default App;
