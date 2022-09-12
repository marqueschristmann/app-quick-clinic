import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { ClinicCardPrimary } from '../../components/ClinicCardPrimary';

import { Header } from '../../components/Header';

import { Clinic } from '../../entities/Clinic';
import { fetchAllClinics } from '../../store/Clinics';
import colors from '../../styles/colors';

const ListClinics = () => {
  const [clinics, setClinics] = useState<Clinic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllClinics().then((response) => {
      setClinics(response);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.plants}>
        <FlatList
          data={clinics}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ClinicCardPrimary name={item.name} />}
          showsVerticalScrollIndicator={false}
          numColumns={1}
          // onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<ActivityIndicator color={colors.green} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },

  spotlight: {
    backgroundColor: colors.blue_light,
    paddingHorizontal: 20,
    borderRadius: 20,
    height: 110,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  spotlightImage: {
    width: 60,
    height: 60,
  },

  spotlightText: {
    flex: 1,
    color: colors.heading,
    paddingHorizontal: 20,
  },

  plants: {
    flex: 1,
    width: '100%',
  },

  plantsTitle: {
    fontSize: 24,
    color: colors.heading,
    marginVertical: 20,
  },
});

export { ListClinics };
