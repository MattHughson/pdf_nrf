"use client";
import { useEffect, useState } from 'react';
import { PDFViewer, Page, Text, View, Document, Image, StyleSheet } from '@react-pdf/renderer';
import { createTw } from 'react-pdf-tailwind';

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
      color: '#000087',
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
      color: '#000000',
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
const Sections = ({blok}) => {
    console.log("Sections", blok)
    const {coursename, envigueur, Secteur, Responsable, policy} =blok
  return (
    <View>
    <Text style={styles.procedureNumber}>PROCÉDURE B ##.##.##</Text>
    <Text style={styles.procedureTitle}>{coursename}</Text>
    <Text style={styles.text}>Date d’entrée en vigueur: {envigueur}</Text>
    <Text style={styles.text}>Remplace : {envigueur}</Text>
    <Text style={styles.text}>Date de la dernière révision : {envigueur} </Text>
    <Text style={styles.text}>Date de la prochaine révision :  {envigueur} </Text>
    <Text style={styles.text}>Secteur :   {Secteur} </Text>
    <Text style={styles.text}>Responsable   {Secteur} </Text>
    <Text style={styles.text}>Responsable   {Responsable} </Text>
    <Text style={styles.text}>Politique de référence :    {policy.cached_url} </Text> 
    <Image
     
        src={blok.image.filename}
        alt={blok.title}
      />
  </View>

  )
}

export default Sections