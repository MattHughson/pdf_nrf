"use client";
import { PDFViewer, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";



const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Times-Roman'
    },
    author: {
      fontSize: 12,
      textAlign: 'Times-Roman',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Times-Roman'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  table: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  tabletitle: {
    margin: 1,
    padding: 5,
    flexGrow: 1,
    width: "50%",
    textAlign: "right",
    backgroundColor: '#FFFFFF',
  },
    tablevalue: {
    margin: 1,
    padding: 5,
    flexGrow: 1,
    backgroundColor: '#F0F0F0',
    width: "50%"
  },
  })




const PagePdf = ({ blok }) => (
<PDFViewer width="100%" height="800">
    <Document>
    <Page style={styles.body}>
    <Text style={styles.header} fixed>
      --- PDF generation with Storyblok content ---
    </Text>
      <Text style={styles.title}>{ blok.title }</Text>


      <Text style={styles.subtitle}>
        {blok.subtitle}
      </Text>
      { blok.image.filename }
            <Image
        style={styles.image}
        src={blok.image.filename}
        alt={blok.title}
      />
      <Text style={styles.text} >
        {blok.text}
      </Text>

        {blok.table.tbody.map(function(object, i){
        return <View style={styles.table}>
          <View style={styles.tabletitle}>
          <Text>{object.body[0].value}</Text>
        </View><View style={styles.tablevalue}>
            <Text>{object.body[1].value}</Text>
          </View></View>;
    })}




    </Page>
  </Document>
</PDFViewer>
);

export default PagePdf;