"use client";
import { useEffect, useState } from 'react';
import { PDFViewer, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

// No font registration required, React-PDF will default to Helvetica
const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Helvetica"], // Default to Helvetica
    },
    extend: {
      colors: {
        green: '#006837',
        red: '#D32F2F',
        gray: '#3A3A3A', 
        lightGray: '#F5F5F5',
      },
    },
  },
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica', // Use Helvetica (the default font)
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  procedureNumber: {
    fontSize: 20,
    color: '#000087',
    marginBottom: 10,
  },
  procedureTitle: {
    fontSize: 20,
    color: '#006837',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 12,
    color: '#3A3A3A',
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#D32F2F',
    marginBottom: 10,
    textDecoration: 'underline',
  },
  text: {
    fontSize: 12,
    color: '#3A3A3A',
    marginBottom: 10,
  },
  table: {
    marginTop: 10,
    marginBottom: 20,
    border: '1px solid #D3D3D3',
  },
  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderBottom: '1px solid #D3D3D3',
  },
  tableCell: {
    width: '50%',
    padding: 10,
    textAlign: 'left',
  },
  footer: {
    marginTop: 40,
    borderTop: '1px solid #D3D3D3',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 10,
    color: '#3A3A3A',
  },
});

const PageWrapper = ({ children, blok }) => (
  <Page size="A4" style={styles.page}>
    <View>{children}</View>
  </Page>
);

const School = ({ blok }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const { logo, Sections} = blok;
  console.log("blok blok",blok);
  return (
    <PDFViewer width="100%" height="800">
      <Document>
        <PageWrapper blok={blok}>
          {/* Header Section with Logo */}
          <View style={styles.header}>
            <Image src={logo.filename} style={styles.logo} />
            
          </View>
     {blok.Sections.map((section, index) => (
       <StoryblokComponent blok={section} key={section._uid} />
     ))}
       
        </PageWrapper>
      </Document>
    </PDFViewer>
  );
}

export default School;
