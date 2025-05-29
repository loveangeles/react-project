import React, { Suspense } from "react";
import routes from "./routes";
import { Mask, DotLoading } from "antd-mobile";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

/*统一路由配置 */
const Element = function Element(props) {
  let { component: Component, meta } = props;
  //修改页面的title
  if (meta && meta.title) {
    document.title = meta.title;
  } else {
    document.title = "Daily News";
  }

  // 获取路由信息， 基于属性传递给组件
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const [usp] = useSearchParams();
  return (
    <Component
      navigate={navigate}
      location={location}
      params={params}
      usp={usp}
    />
  );
};

export default function RouterView() {
  return (
    <Suspense
      fallback={
        <Mask visible={true}>
          <DotLoading color="white" />
        </Mask>
      }
    >
      <Routes>
        {routes.map((item) => {
          let { name, path } = item;
          return (
            <Route key={name} path={path} element={<Element {...item} />} />
          );
        })}
      </Routes>
    </Suspense>
  );
}
