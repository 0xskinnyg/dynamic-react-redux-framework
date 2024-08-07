import React, { useState, useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../services/store";
import { loadApp } from "../services/appSlice";
import appsConfig from "../config/appsConfig.json";
import { Button, Stack } from "rsuite";

interface AppConfig {
  name: string;
  path: string;
  component: string;
}

const ViewPanel: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentApp = useSelector((state: RootState) => state.app.currentApp);

  const [components, setComponents] = useState<{
    [key: string]: React.LazyExoticComponent<React.ComponentType<any>>;
  }>({});

  useEffect(() => {
    const loadComponents = async () => {
      const loadedComponents: {
        [key: string]: React.LazyExoticComponent<React.ComponentType<any>>;
      } = {};
      for (const app of appsConfig as AppConfig[]) {
        loadedComponents[app.name] = lazy(() => import(`${app.path}`));
      }
      setComponents(loadedComponents);
    };
    loadComponents();
  }, []);

  const handleAppChange = (appName: string) => {
    dispatch(loadApp(appName));
  };

  const LoadedComponent = currentApp ? components[currentApp] : null;

  console.log(components);
  console.log(currentApp);

  return (
    <Stack direction="column" alignItems="center">
      <h2>Select below which component you want to render.</h2>
      <nav>
        {(appsConfig as AppConfig[]).map((app) => (
          <Button key={app.name} onClick={() => handleAppChange(app.name)}>
            {app.name}
          </Button>
        ))}
      </nav>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {LoadedComponent ? (
            <LoadedComponent />
          ) : (
            <p>Select an application from the menu.</p>
          )}
        </Suspense>
      </div>
    </Stack>
  );
};

export default ViewPanel;
