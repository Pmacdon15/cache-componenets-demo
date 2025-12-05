export async function getDelayedData() {
  await new Promise(resolve => setTimeout(resolve, 4000));
  return { message: 'Data loaded after 4 seconds!' };
}