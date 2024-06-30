import { usePDF, Document, Page,Text} from '@react-pdf/renderer';
const Print = ({item}) => {
    
  // const data = new

    const MyDoc = (
      <Document>
        <Page >
        <Text  fixed>
        ~ Product Approval Details ~
      </Text>
      <Text >Company Name: {item?.companyName}</Text>
      <Text>Product Name: {item?.productName}</Text>
      <Text>Product Type: {item?.productType}</Text>
        <Text >
            HR MANAGER EMAIL : {item?.assetHolder?.email}
      </Text>
        <Text >
            HR MANAGER NAME : {item?.assetHolder?.name}
      </Text>
      <Text >
        REQUESTED DATE : {item?.requestDate}
      </Text>
      <Text >
        APPROVALDATE DATE : {item?.approvalDate}
      </Text>
      <Text >
        ASSET REQUESTED BY : {item?.name}
      </Text>
      <Text>
        PRINT DATE : {new Date().toLocaleDateString()}
      </Text>
        </Page>
      </Document>
    );
    const [instance, updateInstance] = usePDF({ document: MyDoc });
    
    return (
      <a href={instance.url} download="test.pdf">
        Print
      </a>
    );
};

export default Print;
