import { StyleSheet } from 'react-native';
import { theme } from '../../config/config';

export const formStyles = StyleSheet.create({
  repeatContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: `row`,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: theme.faint.border,
    borderBottomWidth: 1,
  },
  repeatLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  repeatTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  repeatInput: {
    color: theme.container.error,
  },
  variableText: {
    color: theme.container.text,
    lineHeight: 21,
  },
  productInfo: {
    justifyContent: 'space-around',
    marginLeft: 10,
    flex: 1,
  },
  choicedOptions: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 10,
    backgroundColor: theme.pressable.border,
  },
  inputTag: {
    color: theme.container.highlight_text,
  },
  payway: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  payAdditionalInfo: {
    flexDirection: `row`,
    alignItems: `center`,
    marginVertical: 10,
  },
  paywayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paywayBtn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: theme.pressable.background,
    borderColor: theme.pressable.border,
    borderWidth: 1,
  },
  payPlatform: {
    paddingVertical: 20,
  },
  paymentBar: {
    height: 80,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: theme.container.darken,
    elevation: 2,
  },
  payment: {
    backgroundColor: theme.highlight_pressable.background,
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentText: {
    color: theme.highlight_pressable.text,
    fontSize: 20,
  },
});
