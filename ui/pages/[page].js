import { Page, TableOfContents } from '../components';
import { getPages } from '../helpers/api';
import ReactMarkdown from 'react-markdown';

const StaticPage = ({ pageData }) => {
  const { content, title, show_table_of_contents: showContents } = pageData;
  return (
    <Page title={title}>
      <div className="nhsuk-grid-row">
        {showContents && <TableOfContents content={content} />}
        <div className="nhsuk-grid-column-two-thirds">
          <h1>{title}</h1>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </Page>
  );
};

export async function getServerSideProps(context) {
  const { page } = context.params;
  const pages = await getPages();
  const pageData = pages.filter((i) => i.name === page).pop();

  if (!pageData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData,
    },
  };
}

export default StaticPage;
