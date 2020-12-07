import Router from "next/router";
import Head from "next/head";
import { useFormikContext, Formik, Form, Field } from "formik";

import styles from "../styles/Home.module.css";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  valid_cdl: string | undefined;
  valid_twic: string | undefined;
  two_plus_yoe: string | undefined;
  tos: boolean;
}

export default function Home() {
  const initialValues: FormValues = {
    name: "",
    email: "",
    phone: "",
    valid_cdl: undefined,
    valid_twic: undefined,
    two_plus_yoe: undefined,
    tos: false,
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Drive for Mecca Trucking</title>
      </Head>

      <header>
        <div className={styles.blueTop}>
          <img
            src="/logo.png"
            alt="Mecca and Sons Trucking Logo"
            className={styles.logo}
          />
          <h1 className={styles.title}>
            Apply to drive for <a href="http://www.meccatrucking.com">Mecca</a>
          </h1>
        </div>
      </header>

      <main className={styles.main}>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);

            Router.push({
              pathname: "/apply",
              query: { ...values },
            });
            return;
          }}
        >
          <Form>
            <div className={styles.fieldset}>
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Lincoln Hawk"
              />
            </div>

            <div className={styles.fieldset}>
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="lincoln.hawk@overthetop.com"
              />
            </div>

            <div className={styles.fieldset}>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" type="tel" />
            </div>

            <div className={styles.fieldset}>
              <label htmlFor="valid_cdl">
                Do you hold a valid CDL Class A License?
              </label>
              <Field as="select" name="valid_cdl">
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
            </div>

            <div className={styles.fieldset}>
              <label htmlFor="valid_twic">Do you hold a valid TWIC card?</label>
              <Field as="select" name="valid_twic">
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
            </div>

            <div className={styles.fieldset}>
              <label htmlFor="two_plus_yoe">
                Do you have 2 or more years of experience driving tractor
                trailers?
              </label>
              <Field as="select" name="two_plus_yoe">
                <option value="">Please select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Field>
            </div>

            <div className={styles.botTrap}>
              <label htmlFor="tos">
                <Field type="checkbox" name="tos" />I agree to the terms of
                service
              </label>
            </div>

            <FormSubmit />
          </Form>
        </Formik>
      </main>
    </div>
  );
}

function FormSubmit() {
  const { values, isSubmitting } = useFormikContext<FormValues>();

  const isAnyFieldEmpty =
    !Boolean(values.name) ||
    !Boolean(values.email) ||
    !Boolean(values.phone) ||
    !Boolean(values.valid_cdl) ||
    !Boolean(values.valid_twic) ||
    !Boolean(values.two_plus_yoe);

  return (
    <button
      className={styles.submit}
      type="submit"
      disabled={isAnyFieldEmpty || isSubmitting}
    >
      Submit
    </button>
  );
}
