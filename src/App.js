import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Team" element={<Team/>} />
              <Route path="/Contacts" element={<Contacts/>} />
              <Route path="/Invoices" element={<Invoices/>} />
              <Route path="/Form" element={<Form/>} />
              <Route path="/Calendar" element={<Calendar/>} />
              <Route path="/FAQ" element={<FAQ/>} />
              <Route path="/Bar" element={<Bar/>} />
              <Route path="/Pie" element={<Pie />} />
              <Route path="/Line" element={<Line/>} />
              <Route path="/Geography" element={<Geography/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    
  );
}

export default App;
