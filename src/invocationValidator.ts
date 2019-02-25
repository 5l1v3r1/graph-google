import {
  IntegrationExecutionContext,
  IntegrationInstanceAuthenticationError,
  IntegrationInstanceConfigError,
  IntegrationInvocationEvent
} from "@jupiterone/jupiter-managed-integration-sdk";
import { createGSuiteClient } from "./gsuite";

/**
 * Performs validation of the execution before the execution handler function is
 * invoked.
 *
 * At a minimum, integrations should ensure that the instance configuration is
 * valid. It is also helpful to perform authentication with the provider to
 * ensure that credentials are valid. The function will be awaited to support
 * connecting to the provider for this purpose.
 *
 * @param executionContext
 */
export default async function invocationValidator(
  executionContext: IntegrationExecutionContext<IntegrationInvocationEvent>
) {
  const {
    instance: { config },
    invocationArgs
  } = executionContext;

  if (!invocationArgs || !invocationArgs.serviceAccountCredentials) {
    throw new Error(
      "invocationArgs.serviceAccountCredentials must be provided by the execution environment"
    );
  }

  if (!config.domainAdminEmail || !config.googleAccountId) {
    throw new IntegrationInstanceConfigError(
      "config.googleAccountId and config.domainAdminEmail must be provided by the user"
    );
  }

  const provider = createGSuiteClient(executionContext);
  try {
    await provider.authenticate();
  } catch (err) {
    throw new IntegrationInstanceAuthenticationError(err);
  }
}
