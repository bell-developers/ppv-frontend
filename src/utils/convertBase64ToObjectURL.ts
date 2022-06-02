export const convertBase64ToBlob = async (
    base64String: string,
    type: string
): Promise<Blob> => await (await fetch(`data:${type};base64,${base64String}`)).blob();

export const convertBase64ToObjectURL = async (
    base64String: string,
    blobType: string
) => {
    const InputBlob: Blob = await convertBase64ToBlob(base64String, blobType);
    const ObjectURL = URL.createObjectURL(InputBlob);
    return ObjectURL;
};
