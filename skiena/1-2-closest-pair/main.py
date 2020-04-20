import matplotlib.pyplot as plot
import math
import random

#the code is courtesy of 047 from stackoverflow
def draw_arrow(axis, p1, p2, rad):
    """draw an arrow connecting point 1 to point 2"""
    axis.annotate("",
              xy=p2,
              xytext=p1,
              arrowprops=dict(arrowstyle="-", linewidth=0.8, connectionstyle="arc3,rad=" + str(rad)),)


def closest_pair(points):
    distance = lambda c1p, c2p:  math.hypot(c1p[0] - c2p[0], c1p[1] - c2p[1])
    chains = [[points[i]] for i in range(len(points))]
    edges = []
    for i in range(len(points)-1):
        dmin = float("inf")  # infinitely big distance
        # test each chain against each other chain
        for chain1 in chains:
            for chain2 in [item for item in chains if item is not chain1]:
                # test each chain1 endpoint against each of chain2 endpoints
                for c1ind in [0, len(chain1) - 1]:
                    for c2ind in [0, len(chain2) - 1]:
                        dist = distance(chain1[c1ind], chain2[c2ind])
                        if dist < dmin:
                            dmin = dist
                            # remember endpoints as closest pair
                            chain2link1, chain2link2 = chain1, chain2
                            point1, point2 = chain1[c1ind], chain2[c2ind]
        # connect two closest points
        edges.append((point1, point2))
        chains.remove(chain2link1)
        chains.remove(chain2link2)
        if len(chain2link1) > 1:
            chain2link1.remove(point1)
        if len(chain2link2) > 1:
            chain2link2.remove(point2)
        linkedchain = chain2link1
        linkedchain.extend(chain2link2)
        chains.append(linkedchain)
    # connect first endpoint to the last one
    edges.append((chains[0][0], chains[0][len(chains[0])-1]))
    return edges


data = [(0.3, 0.2), (0.3, 0.4), (0.501, 0.4), (0.501, 0.2), (0.702, 0.4), (0.702, 0.2)]
# random.seed()
# data = [(random.uniform(0.01, 0.99), 0.2) for i in range(60)]
edges = closest_pair(data)
# draw path
figure = plot.figure()
axis = figure.add_subplot(111)
plot.scatter([i[0] for i in data], [i[1] for i in data])
nedges = len(edges)
for i in range(nedges - 1):
    draw_arrow(axis, edges[i][0], edges[i][1], 0)
# draw last - curved - edge
draw_arrow(axis, edges[nedges-1][0], edges[nedges-1][1], 0.3)
plot.show()