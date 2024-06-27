import { useEffect, useState } from "react";

function Icon(props) {
  const { name, ...otherProps } = props;

  /* Use state hook to store icon module value */
  const [iconModule, setIconModule] = useState(null);

  useEffect(() => {
    /* Use dynamic import to get corresponding icon as a module */
    import(`./icons/${name}.svg`)
      .then((module) => {
        /* Persist data in state */
        setIconModule(module);
      })
      .catch((error) => {
        /* Do not forget to handle errors */
        console.error(`Icon with name: ${name} not found!`);
      });
  }, [ name /* update on name change */ ]);

  const renderIcon = () => {
    if (!iconModule) return null;

    /* Equal to: import { ReactComponent as Icon } from "./path/to/icon.svg" */
    const Component = iconModule.ReactComponent;

    return <Component {...otherProps} />;
  };

  return <>{renderIcon()}</>;
}
export default Icon;
