import axios from '@/axios';

const key = 'AIzaSyByfiYGDSj1iobdGIl-o-Svmjt8S1HgJ6E';
export async function getRelatedVideo(vedioId) {
    let response = await axios.get(`search?part=snippet&relatedToVideoId=${vedioId}&type=video&key=${key}`)
    return response;
}

export async function getChannels(channelId) {
    let response = await axios.get(`channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${key}`)
    return response;
}



export async function getPlaylists(channelId,pageSize) {
    let response = await axios.get(`playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=${pageSize}&key=${key}`)
    return response;
}

export async function getPlaylistItems(playlistId,pageSize) {
    let response = await axios.get(`playlistItems?part=snippet%2CcontentDetails&maxResults=${pageSize}&playlistId=${playlistId}&key=${key}`)
    return response;
}

export async function getvideo(videoId) {
    let response = await axios.get(`videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${key}`)
    return response;
}

