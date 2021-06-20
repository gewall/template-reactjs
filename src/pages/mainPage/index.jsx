import React, { useContext, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContext } from '../../config/context/mainContext';

const MainPage = () => {
  const { change } = useContext(MainContext);

  useEffect(() => {
    console.log(change);
  }, [change]);

  return (
    <Switch>
      <Route path="/">
        <p className="text-lg">Hello World</p>
      </Route>
    </Switch>
  );
};

export default MainPage;
