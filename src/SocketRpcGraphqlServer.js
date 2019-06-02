import {RpcSocketServer} from 'agnostic-rpc-socket';
import {RpcSubscriptionServer} from 'agnostic-rpc-graphql';

class SocketRpcGraphqlServer {
	constructor(passedSubscriptionServerOptions) {
		const subscriptionServerOptions = Object.assign({
			onOperation: (message, params, webSocket) => {
				params.context.webSocket = webSocket.url;
				return params;
			}
		}, passedSubscriptionServerOptions);
		this.subscriptionServer = new RpcSubscriptionServer(subscriptionServerOptions);
	}

	// Link socket to new RPC server that passes requests to subscription Server
	connect(socket) {
		const rpcSocketServer = new RpcSocketServer(socket);
		return this.subscriptionServer.connect(rpcSocketServer.server, {url: socket});
	}
}

export default SocketRpcGraphqlServer;
