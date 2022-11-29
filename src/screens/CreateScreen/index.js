import * as yup from 'yup';

import ButtonComponent from '@app/components/ButtonComponent'
import HeaderComponent from '@app/components/HeaderComponent'
import InputComponent from '@app/components/InputComponent'
import KeyboardAvoidWrapper from '@app/components/LayoutComponent/KeyboardAvoidWrapper'
import React from 'react'
import SafeAreaWrapper from '@app/components/LayoutComponent/SafeAreaWrapper'
import { View } from 'react-native'
import { createUser } from '@app/store/slices/userSlice';
import locale from '@app/constants/locale'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';

const CreateScreen = ({ navigation }) => {

    let dispatch = useDispatch();

    const validationSchema = yup.object({
        name: yup.string().required('required field empty'),
        email: yup.string().email().required('required field empty'),
        phone: yup.string().required('required field empty')
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        },
        validationSchema,
        onSubmit: values => {
            onCreateUser(values)
        },
    });

    const onCreateUser = async (values) => {
        await dispatch(createUser(values));
    }

    function renderHeader() {
        return (
            <HeaderComponent label={locale.CREATE_USER} />
        )
    }

    function renderCreateOption() {
        return (
            <View style={styles.createOptionWrapper}>
                <ButtonComponent
                    label={locale.CREATE_USER}
                    buttonContainer={{ marginBottom: 0 }}
                    onPress={() => formik.handleSubmit()}
                />

                <ButtonComponent
                    label={locale.CANCEL}
                    buttonContainer={{ marginBottom: 0 }}
                    onPress={() => navigation.goBack()}
                />
            </View>
        )
    }

    function renderCreateForm() {
        return (
            <KeyboardAvoidWrapper style={styles.contentContainerStyle}>
                <InputComponent
                    label={locale.NAME}
                    labelTextStyle={styles.labelTextStyle}
                    value={formik.values.name}
                    onChangeText={formik.handleChange('name')}
                    error={formik.touched.name && formik.errors.name}
                />

                <InputComponent
                    label={locale.EMAIL}
                    keyboardType={'email-address'}
                    labelTextStyle={styles.labelTextStyle}
                    value={formik.values.email}
                    onChangeText={formik.handleChange('email')}
                    error={formik.touched.email && formik.errors.email}
                />

                <InputComponent
                    label={locale.PHONE}
                    keyboardType={'phone-pad'}
                    labelTextStyle={styles.labelTextStyle}
                    value={formik.values.phone}
                    onChangeText={formik.handleChange('phone')}
                    error={formik.touched.phone && formik.errors.phone}
                />

                {renderCreateOption()}

            </KeyboardAvoidWrapper>
        )
    }


    return (
        <SafeAreaWrapper>
            {renderHeader()}
            {renderCreateForm()}
        </SafeAreaWrapper>
    )
}

export default CreateScreen

