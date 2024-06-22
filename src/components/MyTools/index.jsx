import tools from "../../mocks/my-tools.json";
import { EachTool } from "./EachTool";

export const MyTools = () => {
  return (
    <ul>
      {tools.map((tool) => (
        <EachTool key={tool.id} tool={tool} />
      ))}
    </ul>
  );
};
