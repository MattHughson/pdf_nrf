"use client";
import { PDFViewer, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Helvetica"],
    },
    extend: {
      colors: {
        green: '#006837',
        red: '#D32F2F',
      },
    },
  },
});

const styles = StyleSheet.create({
  page: {
    position: 'relative',
    padding: 0,
    fontFamily: 'Helvetica',
    width: '100%',
    height: '100%',
  },
  background: {
    position: 'absolute',
    width: '100%',
    zIndex: -1,
  },
  content: {
    position: 'absolute',
    top: '150',
    left: '32%',
    transform: 'translate(-50%, -50%)',
    paddingHorizontal: 20,
    width: '52%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerText: tw('text-green text-3xl'),  // Adjust font size if necessary
  mainText: tw('text-green text-lg mb-2'),
  priceText: tw('text-red text-2xl mb-3'),
  footerText: tw('text-green text-xs mb-1'),
  linkText: tw('text-red text-xs mb-1'),
});

const PageWrapper = ({ children, blok }) => (
  <Page size="A4" style={styles.page}>
    <Image
      src={blok.logo.filename} // Use the correct path for your background image
      style={styles.background}
    />
    <View>{children}</View>
  </Page>
);

const FundPDF = ({ blok }) => (
  <PDFViewer width="100%" height="800">
    <Document>
      <PageWrapper blok={blok}>
        <View style={styles.content}>
          <Text style={styles.headerText}>{blok.Heading}</Text>
          <Text style={styles.headerText}>{blok.headingtwo}</Text>
          <Text style={styles.mainText}>{blok.tagline}</Text>
          <Text style={styles.priceText}>{blok.price}</Text>
          <Text style={styles.footerText}>Organized by Kin Canada - Kinsmen Club of Fonthill & District</Text>
          <Text style={styles.footerText}>Sponsored by Salumatics</Text>
          <Text style={styles.linkText}>Preorder Now: www.fonthillkinsmen.ca</Text>
        </View>
      </PageWrapper>
    </Document>
  </PDFViewer>
);

export default FundPDF;
