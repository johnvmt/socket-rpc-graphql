import {RpcSocketClient, RpcSocketServer} from 'agnostic-rpc-socket';
import {ApolloRpcLink, RpcSubscriptionServer} from 'agnostic-rpc-graphql';

class SocketRpcGraphqlServer {
	constructor(subscriptionServerOptions) {
		this.subscriptionServer = new RpcSubscriptionServer(subscriptionServerOptions);
	}

	// Link socket to new RPC server that passes requests to subscription Server
	connect(socket) {
		const rpcSocketServer = new RpcSocketServer(socket);
		return this.subscriptionServer.connect(rpcSocketServer.server);
	}
}

export default SocketRpcGraphqlServer;
