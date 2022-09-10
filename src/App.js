import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComboBox from './Component/Common/ComboBox';
import BasicButtonGroup from './Component/Common/BasicButtonGroup';
import SplitButton from './Component/Common/SplitButton';
import Checkboxes from './Component/Common/Checkboxes';
import ColorCheckboxes from './Component/Common/ColorCheckboxes';
import IconCheckboxes from './Component/Common/IconCheckboxes';
import IndeterminateCheckbox from './Component/Common/IndeterminateCheckbox';
import FloatingActionButtons from './Component/Common/FloatingActionButtons';
import ImageAvatars from './Component/Common/ImageAvatars';
import PrimarySearchAppBar from './Component/Common/PrimarySearchAppBar';
import RecipeReviewCard from './Component/Common/RecipeReviewCard';
import SimplePaper from './Component/Common/SimplePaper';
import Elevation from './Component/Common/Elevation';
import BasicBreadcrumbs from './Component/Common/BasicBreadcrumbs';
import FixedBottomNavigation from './Component/Common/FixedBottomNavigation';
import BasicSpeedDial from './Component/Common/BasicSpeedDial';
import StandardImageList from './Component/Common/StandardImageList';

import MyApp from './Component/MyApp';
import BookApp from './Component/BookApp';

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/MyApp" element={<MyApp />} />
        <Route path="/Book" element={<BookApp />} />
        <Route path="/common" element={
          <>
            <StandardImageList />
            <SplitButton />
            <Checkboxes />
            <ColorCheckboxes />
            <IconCheckboxes />
            <IndeterminateCheckbox />
            <FloatingActionButtons />
            <ImageAvatars />
            <BasicSpeedDial />
            <PrimarySearchAppBar />
            <RecipeReviewCard />
            <SimplePaper />
            <Elevation />
            <FixedBottomNavigation />
          </>
        } />
        <Route path="/combo" element={<ComboBox />} />
        <Route path="/*" element={<BasicButtonGroup />} />
      </Routes>
    </BrowserRouter>
  </>);
}

export default App;
