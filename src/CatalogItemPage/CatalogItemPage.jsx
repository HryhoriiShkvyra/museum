import React from "react";
import "./CatalogItemPage.css";
import { useParams } from "react-router";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import CatalogPageTable from "../CatalogPageTable/CatalogPageTable";
import DataSheet from "../DataSheet/DataSheet";

export default function MuseumApp() {
  const params = useParams();
  const pageId = params.id;
  const dataSheet = DataSheet;
  const [isLoading, setIsLoading] = React.useState(true);
  const tableState = "three-items";
  // const [tableState, setTableState] = React.useState("three-item")
  const [currentArticle, setCurrentArticle] = React.useState("");
  const [currentArticleExtendedData, setCurrentArticleExtendedData] =
    React.useState("");

  React.useEffect(() => {
    const findArticles = () => {
      let articlesArray = dataSheet.find((item) => item.url_title === pageId);
      if (articlesArray) {
        setCurrentArticle(articlesArray.article_data);
      }
      if (articlesArray) {
        setCurrentArticleExtendedData(articlesArray);
      }
      if (articlesArray.url_title === pageId) {
        return setIsLoading(false);
      }
    };
    findArticles();
  }, [pageId]);

  const ContentBlocks = {
    title: ({ children, level = 1 }) => {
      const Tag = `h${level}`;
      return <Tag className="">{children}</Tag>;
    },

    boldText: ({ children }) => <h2 className="">{children}</h2>,

    regularText: ({ children }) => (
      <h2 className="catalog-item-regular-text">{children}</h2>
    ),

    boldAndRegularText: (children) => {
      const { items = [] } = children;

      return (
        <div className="catalog-item-bold-and-regular-text-wrapper">
          {items.map((item, index) => (
            <div className="catalog-item-bold-and-regular-text" key={index}>
              <h2 className="catalog-item-bold-and-regular-text-b">
                {item.boldText}:{" "}
              </h2>
              <h2 className="catalog-item-bold-and-regular-text-r">
                {item.regularText && ` ${item.regularText}`}
              </h2>
            </div>
          ))}
        </div>
      );
    },

    column: ({ children, columns = 2 }) => (
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 mb-6`}>
        {children.map((item, index) => (
          <div key={index}>
            {typeof item === "string" ? (
              <h2 className="text-base mb-3 text-gray-600 leading-relaxed">
                {item}
              </h2>
            ) : (
              <ContentRenderer content={[item]} />
            )}
          </div>
        ))}
      </div>
    ),

    image: ({ src, alt }) => (
      <img className="catalog-item-image" src={src} alt={alt} />
    ),

    quote: ({ children, author }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
        <h2>{children}</h2>
        {author && (
          <cite className="block text-sm text-gray-500 mt-2">— {author}</cite>
        )}
      </blockquote>
    ),
  };

  const ContentRenderer = ({ content }) => {
    console.log(content);

    return (
      <div className="catalog-item-page">
        {content.map((block, index) => {
          const Component = ContentBlocks[block.type];
          if (!Component) {
            console.warn(`Unknown block type: ${block.type}`);
            return null;
          }
          return (
            <Component key={index} {...block.props}>
              {block.content}
            </Component>
          );
        })}
      </div>
    );
  };

  return (
    <div className="catalog-item-page-wrapper">
      {isLoading ? (
        <>Loading</>
      ) : (
        <>
          <div className="section">
            <div className="page-title-wrapper">
              <div className="page-title">
                <h1>{currentArticleExtendedData.title_ua}</h1>
              </div>
              <div className="redirect-tree">
                <h2>Головна</h2>
                <div className="redirect-tree-icon">
                  <NavigateNextIcon />
                </div>
                <h2>Експонати музею</h2>
                <div className="redirect-tree-icon">
                  <NavigateNextIcon />
                </div>
                <h2>{currentArticleExtendedData.country_ua}</h2>
              </div>
            </div>
          </div>

          <div className="main-section">
            <ContentRenderer content={currentArticle} />
            <h1 className="catalog-item-page-else-title">
              Дивитися інші експонати
            </h1>
            <CatalogPageTable
              setArticle={setCurrentArticle}
              data={dataSheet}
              tableState={tableState}
            />
          </div>
        </>
      )}
    </div>
  );
}
