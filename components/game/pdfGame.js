import React from 'react';
import { Page, Text, Image, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  isi: {
    margin: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  text: {
    margin: 12,
    fontSize: 18,
    textAlign: 'justify',
    fontFamily: 'Times-Roman',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    margin: 30,
    fontSize: 36,
    fontWeight: 'bold',
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
});

const PdfGame = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          Instructions
        </Text>
        <Text style={styles.text}>
          <div style={styles.isi}>
            <p>
              #1 What it is: An easy, fast game that everyone probably already knows. But I like to be comprehensive, so here we go with some rock-paper-scissors instructions. Rock-paper-scissors is a quick win-loose game that is often used
              to determine who will go first or who will win some other small privilege.{' '}
            </p>
            <p>#2 Best for: Two players. But you could have a giant rock-paper-scissors tournament with tons of people! </p>
            <p>#3 What you need: Nothing! Well, technically speaking, each player needs to use their two hands.</p>
            <p>
              #4 How to play: In rock-paper-scissors, two players will each randomly choose one of three hand signs: rock (made by making a fist), paper (made by laying your hand flat), or scissors (made by holding out two fingers to look
              like scissors). Both players show their signs at the same time to see who will win. Here are the rules that determine which sign beats another:{' '}
            </p>
            <ul>
              <li>Rock wins over scissors (because rock smashes scissors) </li>
              <li>Scissors wins over paper (because scissors cut paper) </li>
              <li>Paper wins over rock (because paper covers rock)</li>
            </ul>
          </div>
        </Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
      </Page>
    </Document>
  );
};

export default PdfGame;
